#!/bin/bash
# script for running spike
host=192.168.0.106
port=9999
spike_script=stats.spk
skipvar=0
skipstring=0
generic_send_tcp {$host $port $spike_script $skipvar $skipstr}
